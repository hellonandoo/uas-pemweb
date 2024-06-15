// src/pages/Home/index.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import axios from 'axios';
import NewsList from '../../components/NewsList';

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://192.168.1.6:5000/') // Ganti dengan alamat IP server backend Anda
      .then(response => {
        setNewsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredNews = newsData.filter(news =>
    news.judul_berita.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.ringkasan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      </View>
      <NewsList newsData={filteredNews} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    padding: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
});

export default Home;
