// components/GoogleSignInButton.tsx
import React from 'react';
// import Image from 'next/image';
// import { supabase } from '../lib/supabase';
import { Button } from './ui/button';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

import { useSupabaseClient } from '@supabase/auth-helpers-react'

const GoogleIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={`w-5 h-5 ${className}`}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
        <path fill="none" d="M0 0h48v48H0z" />
    </svg>
);


const GoogleSignInButton: React.FC = () => {
    // provider: 'linkedin_oidc',
    // provider: 'google',
  const supabase = useSupabaseClient()

  
    const handleSignIn = async (provider: 'google' | 'linkedin_oidc') => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `/`
                    // redirectTo: `${window.location.origin}/auth/callback`
                }
            });
            if (error) throw error;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            console.error('Error signing in with Google:', errorMessage);
            alert(errorMessage);
        }
    };

    return (
        <>
            {/* <Button variant="outline" className="w-full" onClick={handleSignIn}>
                <GoogleIcon className="mr-2" />
                Sign in with Google
            </Button> */}
            
            <div className="flex flex-col space-y-2 w-full">
            <Button variant="outline" className="w-full" onClick={() => handleSignIn('google')}>
            <GoogleIcon className="mr-2" />
                Sign in with Google
            </Button>
            <Button variant="outline" className="w-full" onClick={() => handleSignIn('linkedin_oidc')}>
                <LinkedInLogoIcon className="mr-2" />
                Sign in with LinkedIn
            </Button>
        </div>

        </>
    );
};

export default GoogleSignInButton;