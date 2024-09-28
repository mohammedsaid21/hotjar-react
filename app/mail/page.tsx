import Mail from '@/components/mail/mail'
import { accounts, mails } from '@/components/mail/data'

export default function MailPage() {
  return (
    <Mail 
      accounts={accounts}
      mails={mails}
      defaultLayout={[265, 440, 655]}
      navCollapsedSize={4}
    />
  )
}