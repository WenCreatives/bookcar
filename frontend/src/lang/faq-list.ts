import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    FAQ_TITLE: 'FAQ',
    MORE_QUESTIONS: 'Plus de questions ?',
    FAQ_DOCUMENTS_TITLE: 'De quels documents ai-je besoin pour louer un véhicule ?',
    FAQ_DOCUMENTS_TEXT: "Pour louer un véhicule, vous aurez généralement besoin d'un permis de conduire valide, d'une carte de crédit pour le paiement et le dépôt de garantie, ainsi que d'une preuve d'assurance. Des exigences supplémentaires peuvent varier en fonction de votre emplacement et du type de véhicule que vous louez.",
    FAQ_SERVICES_TITLE: 'Proposez-vous des services de livraison et de restitution ?',
    FAQ_SERVICES_TEXT: 'Oui, nous le faisons ! Nous proposons des services de livraison et de ramassage pratiques à divers endroits, notamment les aéroports, les hôtels, etc. Dites-nous simplement votre destination préférée et nous nous occuperons du reste.',
    FAQ_AGE_TITLE: "Y a-t-il une limite d'âge pour louer un véhicule ?",
    FAQ_AGE_TEXT: "Oui, l'âge minimum requis pour louer un véhicule est de 21 ans (ou 25 ans pour certaines catégories de véhicules). Une carte de crédit/débit approuvée à votre nom est également requise pour le dépôt de garantie.",
    FAQ_CANCEL_TITLE: 'Que se passe-t-il si je dois annuler ma réservation ?',
    FAQ_CANCEL_TEXT: "Les annulations effectuées 48 heures avant la prise en charge sont gratuites. Les annulations tardives ou les non-présentations peuvent entraîner des frais. Veuillez vous référer à nos conditions générales ou contacter notre équipe d'assistance client pour plus d'informations.",
  },
  en: {
    FAQ_TITLE: 'FAQ',
    MORE_QUESTIONS: 'More questions?',
    FAQ_DOCUMENTS_TITLE: 'What documents do I need to rent a vehicle?',
    FAQ_DOCUMENTS_TEXT: "To rent a vehicle, you'll typically need a valid driver's license, a credit card for payment and security deposit, and proof of insurance. Additional requirements may vary depending on your location and the type of vehicle you're renting.",
    FAQ_SERVICES_TITLE: 'Do you offer delivery and pickup services?',
    FAQ_SERVICES_TEXT: "Yes, we do! We offer convenient delivery and pickup services to various locations, including airports, hotels, and more. Just let us know your preferred location, and we'll take care of the rest.",
    FAQ_AGE_TITLE: 'Is there an age requirement for renting a vehicle?',
    FAQ_AGE_TEXT: 'Yes, the minimum age requirement for renting a vehicle is 21 years old (or 25 for certain vehicle categories). An approved credit/debit card in your name is also required for the security deposit.',
    FAQ_CANCEL_TITLE: 'What happens if I need to cancel my reservation?',
    FAQ_CANCEL_TEXT: 'Cancellations made 48 hours before pickup are free of charge. Late cancellations or no-shows may incur a fee. Please refer to our terms and conditions or contact our customer support team for more information.',
  },
  es: {
    FAQ_TITLE: 'Preguntas frecuentes',
    MORE_QUESTIONS: '¿Más preguntas?',
    FAQ_DOCUMENTS_TITLE: '¿Qué documentos necesito para alquilar un vehículo?',
    FAQ_DOCUMENTS_TEXT: 'Para alquilar un vehículo, normalmente necesitarás una licencia de conducir válida, una tarjeta de crédito para el pago y el depósito de seguridad, y un comprobante de seguro. Los requisitos adicionales pueden variar según tu ubicación y el tipo de vehículo que estés alquilando.',
    FAQ_SERVICES_TITLE: '¿Ofrecen servicios de entrega y recogida?',
    FAQ_SERVICES_TEXT: '¡Sí, lo hacemos! Ofrecemos cómodos servicios de entrega y recogida en varios lugares, incluidos aeropuertos, hoteles y más. Solo indícanos tu ubicación preferida y nosotros nos encargaremos del resto.',
    FAQ_AGE_TITLE: '¿Existe un requisito de edad para alquilar un vehículo?',
    FAQ_AGE_TEXT: 'Sí, la edad mínima requerida para alquilar un vehículo es de 21 años (o 25 para ciertas categorías de vehículos). También se requiere una tarjeta de crédito/débito aprobada a su nombre para el depósito de seguridad.',
    FAQ_CANCEL_TITLE: '¿Qué sucede si necesito cancelar mi reserva?',
    FAQ_CANCEL_TEXT: 'Las cancelaciones hechas 48 horas antes de la recogida son gratuitas. Las cancelaciones tardías o no presentaciones pueden incurrir en una tarifa. Consulta nuestros términos y condiciones o comunícate con nuestro equipo de atención al cliente para más información.',
  },
})

langHelper.setLanguage(strings)
export { strings }
