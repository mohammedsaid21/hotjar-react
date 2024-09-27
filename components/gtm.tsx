// app/components/GTM.tsx
import Script from 'next/script';

const GTM = () => {
    return (
        <>
            {/* GTM - Google Tag Manager Script */}
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];
                    w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                    })
                    (window,document,'script','dataLayer','GTM-588ZVD63');
                `,
                }}
            />
            {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-588ZVD63');</script> */}
            {/* GTM - NoScript Fallback */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-588ZVD63"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>

            {/* <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-588ZVD63"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
    <!-- End Google Tag Manager (noscript) --> */}

        </>
    );
};

export default GTM;
