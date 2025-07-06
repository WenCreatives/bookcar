import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    SETTINGS_UPDATED: 'Paramètres modifiés avec succès.',
    NETWORK_SETTINGS: 'Paramètres Réseau',
    SETTINGS_EMAIL_NOTIFICATIONS: 'Activer les notifications par email',
    PLEASE_WAIT: 'Veuillez patienter...',
    EMAIL_VERIFIED_SUCCESS: 'Votre email a été vérifié avec succès ! Redirection vers la connexion...',
    EMAIL_VERIFIED_ERROR: "Échec de la vérification. Le lien est peut-être invalide ou expiré.",
    INVALID_VERIFICATION_LINK: 'Lien de vérification invalide.',
  },
  en: {
    SETTINGS_UPDATED: 'Settings updated successfully.',
    NETWORK_SETTINGS: 'Network settings',
    SETTINGS_EMAIL_NOTIFICATIONS: 'Enable email notifications',
    PLEASE_WAIT: 'Please wait...',
    EMAIL_VERIFIED_SUCCESS: 'Your email has been successfully verified! Redirecting to sign in...',
    EMAIL_VERIFIED_ERROR: 'Verification failed. The link may be invalid or expired.',
    INVALID_VERIFICATION_LINK: 'Invalid verification link.',
  },
  es: {
    SETTINGS_UPDATED: 'Configuración actualizada correctamente.',
    NETWORK_SETTINGS: 'Configuración de red',
    SETTINGS_EMAIL_NOTIFICATIONS: 'Habilitar notificaciones por correo electrónico',
    PLEASE_WAIT: 'Por favor, espere...',
    EMAIL_VERIFIED_SUCCESS: '¡Su correo electrónico ha sido verificado con éxito! Redirigiendo al inicio de sesión...',
    EMAIL_VERIFIED_ERROR: 'La verificación falló. El enlace puede ser inválido o haber expirado.',
    INVALID_VERIFICATION_LINK: 'Enlace de verificación inválido.',
  },
})

langHelper.setLanguage(strings)
export { strings }
