// src/components/NewsList.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const NewsList = ({ newsData }) => {
  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.title}>{item.judul_berita}</Text>
      <Text style={styles.category}>{item.jenis_berita}</Text>
      <Text style={styles.summary}>{item.ringkasan}</Text>
      <Text style={styles.keywordLabel}>Keywords:</Text>
      <View style={styles.keywordsContainer}>
        {item.keywords.split(',').map((keyword, index) => (
          <Text key={index} style={styles.keyword}>{keyword.trim()}</Text>
        ))}
      </View>
    </View>
  );

  return (
    <FlatList
      data={newsData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  newsItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8
  },
  category: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: '600',
    marginBottom: 8
  },
  summary: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8
  },
  keywordLabel: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    marginBottom: 4,
    fontWeight: '600'
  },
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  keyword: {
    fontSize: 12,
    color: '#555',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginRight: 6,
    marginBottom: 6
  }
});

export default NewsList;
