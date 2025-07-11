import { z } from 'zod'
import validator from 'validator'
import { intervalToDuration } from 'date-fns'
import { strings as commonStrings } from '@/lang/common'
import env from '@/config/env.config'

export const schema = z.object({
  fullName: z.string().min(1, { message: commonStrings.REQUIRED }),
  email: z.string().min(1, { message: commonStrings.REQUIRED }).refine((value) => validator.isEmail(value), { message: commonStrings.EMAIL_NOT_VALID }),
  phone: z.string().min(1, { message: commonStrings.REQUIRED }).refine((value) => {
    // Try validation with different locales for better international support
    return validator.isMobilePhone(value) || 
           validator.isMobilePhone(value, 'any') || 
           validator.isMobilePhone(value, ['en-KE', 'en-US', 'en-GB'])
  }, { message: commonStrings.PHONE_NOT_VALID }),
  birthDate: z.date().refine((value) => {
    const sub = intervalToDuration({ start: value, end: new Date() }).years ?? 0
    return sub >= env.MINIMUM_AGE
  }, { message: commonStrings.BIRTH_DATE_NOT_VALID }),
  password: z.string().min(env.PASSWORD_MIN_LENGTH, { message: commonStrings.PASSWORD_ERROR }),
  confirmPassword: z.string().min(1, { message: commonStrings.REQUIRED }),
  tos: z.boolean().refine((value) => value, { message: commonStrings.TOS_ERROR })
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: commonStrings.PASSWORDS_DONT_MATCH,
})

export type FormFields = z.infer<typeof schema>
