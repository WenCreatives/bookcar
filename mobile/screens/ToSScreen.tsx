import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import i18n from '@/lang/i18n'
import * as UserService from '@/services/UserService'
import Layout from '@/components/Layout'
import * as helper from '@/common/helper'

const ToSScreen = ({ navigation, route }: NativeStackScreenProps<StackParams, 'ToS'>) => {
  const isFocused = useIsFocused()

  const [reload, setReload] = useState(false)
  const [visible, setVisible] = useState(false)

  const _init = async () => {
    setVisible(false)
    const language = await UserService.getLanguage()
    i18n.locale = language
    setVisible(true)
  }

  useEffect(() => {
    if (isFocused) {
      _init()
      setReload(true)
    } else {
      setVisible(false)
    }
  }, [route.params, isFocused])

  const onLoad = () => {
    setReload(false)
  }

  return (
    <Layout style={styles.master} navigation={navigation} route={route} onLoad={onLoad} reload={reload}>
      {visible && (
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps={helper.android() ? 'handled' : 'always'}
        >
          <Text style={styles.title}>Terms of Service</Text>
          
          <Text style={styles.introduction}>
            These Terms and Conditions govern your use of our vehicle rental services. By renting a vehicle from DriveNow, you agree to comply with these Terms. Please read them carefully.
          </Text>

          <Text style={styles.sectionTitle}>1. Rental Agreement</Text>
          
          <Text style={styles.subsectionTitle}>1.1 Eligibility:</Text>
          <Text style={styles.text}>
            You must be at least 21 years old (or 25 for certain vehicle categories) with a valid driver's license. An approved credit/debit card in your name is required for the security deposit.
          </Text>
          
          <Text style={styles.subsectionTitle}>1.2 Reservations & Payments:</Text>
          <Text style={styles.text}>
            Reservations can be made online, via phone, or in person. A deposit may be required to confirm your booking. Full payment is due at the time of rental unless otherwise agreed.
          </Text>
          
          <Text style={styles.subsectionTitle}>1.3 Cancellation Policy:</Text>
          <Text style={styles.text}>
            Cancellations made 48 hours before pickup are free of charge. Late cancellations or no-shows may incur a fee.
          </Text>

          <Text style={styles.sectionTitle}>2. Rental Period & Extensions</Text>
          <Text style={styles.text}>
            The rental period begins and ends as specified in your agreement. Extensions must be requested in advance and are subject to availability and additional charges. Failure to return the vehicle on time may result in late fees or penalties.
          </Text>

          <Text style={styles.sectionTitle}>3. Vehicle Use & Restrictions</Text>
          
          <Text style={styles.subsectionTitle}>3.1 Authorized Drivers:</Text>
          <Text style={styles.text}>
            Only drivers listed in the rental agreement are permitted to operate the vehicle. Additional drivers may be added for a fee.
          </Text>
          
          <Text style={styles.subsectionTitle}>3.2 Prohibited Uses:</Text>
          <Text style={styles.text}>
            Off-road driving, racing, or illegal activities. Transporting hazardous materials or exceeding passenger/cargo limits. Towing without prior written approval.
          </Text>
          
          <Text style={styles.subsectionTitle}>3.3 Geographical Restrictions:</Text>
          <Text style={styles.text}>
            Vehicles may not be taken outside specified region/country without permission.
          </Text>

          <Text style={styles.sectionTitle}>4. Fuel Policy</Text>
          <Text style={styles.text}>
            Vehicles must be returned with the same fuel level as at pickup, or a refueling fee will apply. Driving on an empty tank may result in additional charges.
          </Text>

          <Text style={styles.sectionTitle}>5. Insurance & Liability</Text>
          
          <Text style={styles.subsectionTitle}>5.1 Basic Coverage:</Text>
          <Text style={styles.text}>
            Includes mandatory third-party liability insurance as per local laws.
          </Text>
          
          <Text style={styles.subsectionTitle}>5.2 Optional Coverage:</Text>
          <Text style={styles.text}>
            Collision Damage Waiver (CDW) – reduces financial responsibility for damage. Theft Protection (TP) – covers theft of the vehicle (subject to excess/deductible).
          </Text>
          
          <Text style={styles.subsectionTitle}>5.3 Exclusions:</Text>
          <Text style={styles.text}>
            Damage from negligence, unauthorized drivers, or prohibited use. Personal belongings are not covered; renters are advised to secure their own insurance.
          </Text>

          <Text style={styles.sectionTitle}>6. Maintenance & Breakdowns</Text>
          <Text style={styles.text}>
            Renters must check fluid levels, tire pressure, and report any issues immediately. In case of a breakdown, contact DriveNow for assistance. Do not attempt repairs without authorization.
          </Text>

          <Text style={styles.sectionTitle}>7. Accidents & Damage</Text>
          <Text style={styles.text}>
            Report any accident, damage, or theft to DriveNow and local authorities immediately. A police report may be required for insurance claims. Renters may be liable for damages not covered by insurance.
          </Text>

          <Text style={styles.sectionTitle}>8. Vehicle Return</Text>
          <Text style={styles.text}>
            Return the vehicle on time, in the same condition (minus normal wear and tear). Late returns may incur additional rental fees. A post-rental inspection will be conducted, and any discrepancies will be charged accordingly.
          </Text>

          <Text style={styles.sectionTitle}>9. Security Deposit & Charges</Text>
          <Text style={styles.text}>
            A refundable security deposit is required at pickup. The deposit may be used to cover fuel discrepancies, traffic fines or toll violations, and unreported damage or cleaning fees.
          </Text>

          <Text style={styles.sectionTitle}>10. Traffic Violations & Fines</Text>
          <Text style={styles.text}>
            Renters are responsible for all traffic fines, tolls, or parking violations during the rental period. Administrative fees may apply if DriveNow handles violations on your behalf.
          </Text>

          <Text style={styles.sectionTitle}>11. Termination of Rental</Text>
          <Text style={styles.text}>
            DriveNow reserves the right to terminate the rental agreement if the vehicle is misused or driven illegally, or the renter breaches any terms of this agreement.
          </Text>

          <Text style={styles.sectionTitle}>12. Dispute Resolution & Governing Law</Text>
          <Text style={styles.text}>
            Any disputes shall be resolved under the laws of the applicable jurisdiction. Mediation or arbitration may be required before legal action.
          </Text>

          <Text style={styles.sectionTitle}>13. Changes to Terms</Text>
          <Text style={styles.text}>
            DriveNow may update these Terms at any time. Continued use of our services constitutes acceptance of the revised Terms.
          </Text>

          <Text style={styles.sectionTitle}>14. Contact Us</Text>
          <Text style={styles.text}>For questions or assistance, contact:</Text>
          <Text style={styles.contactText}>Phone: +254721459378</Text>
          <Text style={styles.contactText}>Email: info@drivenow.co.ke</Text>
          <Text style={styles.contactText}>Address: Ground Floor 1st wing, Guptus, Nyali</Text>

          <Text style={styles.text}>
            By renting with DriveNow, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
          </Text>
        </ScrollView>
      )}
    </Layout>
  )
}

const styles = StyleSheet.create({
  master: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    color: '#2563eb',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  introduction: {
    color: '#2c2c54',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
  },
  subsectionTitle: {
    color: '#2c2c54',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    color: '#2c2c54',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  contactText: {
    color: '#2c2c54',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 10,
    marginBottom: 5,
  },
})

export default ToSScreen
