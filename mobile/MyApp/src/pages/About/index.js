// src/pages/About/index.js
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tentang Proyek Ini</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Proyek ini dibangun sebagai bagian dari ujian akhir semester (UAS) untuk mata kuliah Pemrograman Mobile & Web pada semester 4. Tujuan dari proyek ini adalah untuk menunjukkan keterampilan dan pengetahuan yang telah diperoleh selama semester ini dalam mengembangkan aplikasi mobile dan web.
        </Text>
        <Text style={styles.text}>
          Aplikasi ini mencakup berbagai fitur yang menunjukkan penggunaan teknologi dan kerangka kerja modern seperti React Native untuk pengembangan mobile. Aplikasi ini dirancang agar mudah digunakan dan menarik secara visual, dengan menerapkan praktik terbaik dalam desain UI/UX.
        </Text>
        <Text style={styles.text}>
          Proyek ini berfungsi sebagai demonstrasi komprehensif dari kemampuan kami untuk membuat aplikasi mobile yang fungsional, efisien, dan estetis. Kami berharap Anda menemukan aplikasi ini informatif dan mencerminkan kerja keras dan dedikasi kami.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Dibuat oleh:</Text>
        <Text style={styles.footerName}>Fernanda Widyadhana Tsaqif</Text>
        <Text style={styles.footerText}>Angkatan Sistem Informasi Tahun 2022</Text>
        <Text style={styles.footerText}>NIM: 09040622059</Text>
      </View>
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
    lineHeight: 24
  },
  footer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center'
  },
  footerText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4
  },
  footerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4
  }
})
