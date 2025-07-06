import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import * as UserService from '@/services/UserService'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'
import Error from '@/components/Error'
import Backdrop from '@/components/SimpleBackdrop'
import { strings } from '@/lang/settings' // corrected import path

const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const email = searchParams.get('e')
    const token = searchParams.get('t')

    if (!email || !token) {
      setStatus('error')
      setMessage(strings.INVALID_VERIFICATION_LINK)
      return
    }

    UserService.confirmEmail(email, token)
      .then((resStatus) => {
        if (resStatus === 200) {
          setStatus('success')
          setMessage(strings.EMAIL_VERIFIED_SUCCESS)
          setTimeout(() => navigate('/sign-in'), 3000)
        } else {
          setStatus('error')
          setMessage(strings.EMAIL_VERIFIED_ERROR)
        }
      })
      .catch(() => {
        setStatus('error')
        setMessage(strings.EMAIL_VERIFIED_ERROR)
      })
  }, [searchParams, navigate])

  return (
    <Layout>
      <div className="verify-email">
        {status === 'pending' && <Backdrop text={strings.PLEASE_WAIT} />}
        {status === 'success' && <div className="success">{message}</div>}
        {status === 'error' && <Error message={message} />}
      </div>
      <Footer />
    </Layout>
  )
}

export default VerifyEmail
