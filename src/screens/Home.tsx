import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Text, View } from 'react-native';

export default function Home() {
  const { data } = useQuery({
    queryKey: ['myKey'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      return response.json();
    },
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#000' }}>{JSON.stringify(data)}</Text>
    </View>
  );
}
