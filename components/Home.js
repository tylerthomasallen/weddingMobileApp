import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';

// Styles
import styleConstants from '../StyleConstants';

export default function Home() {
  return (
    <ScrollView style={styleConstants.scrollview}>
      <View style={styleConstants.page}>
      <View style={styleConstants.pageItem}>
        <Text style={styleConstants.title}>Welcome to Linville</Text>
        <Text style={styleConstants.description}>We are so excited to share our meaningful weekend with so many incredible people who 
          have impacted us throughout our lives. We cannot thank you enough for taking the time to 
          travel to the beautiful Blue Ridge Mountains of North Carolina to be with us. 
          Over the years, the Oates family has gathered family and friends in Linville for celebrations, 
          holidays, summer hikes and cozy snowed-in winter fires. Here, we have played competitive pickle-ball and 
          tennis matches, endured worm-burner golf shots, danced with the Linville community in “the Camp”, and enjoyed clear, 
          starry mountain nights. Together, we have gone on many adventures in these mountains-- 
          adventures we have shared with the entire Allen clan. We cannot wait to celebrate 
          the beginning of our marriage with you in this special place.
        </Text>
      </View>
      <View style={styleConstants.pageItem}>
        <Text style={styleConstants.title}>Our Story</Text>
        <Text style={styleConstants.description}>
        We both played lacrosse at Colorado College, and although our paths crossed in the training room, on the field, in the dining hall and at social events, 
        we officially met on the evening of Friday, September 7 th, 2012.
        On that Friday night, Ginna and her five college housemates living in “The Deuce” were getting ready
        for their first night out as Seniors.The party theme was“ Jersey Shore” and a trip to the Deuce basement produced 
        many costume choices through hand - me - downs from upperclassmen.Tyler, a junior, was with his buddies, not thinking about costumes.
        Fate had us meet at the party as Ginna was leaving.On the steps of a rundown college house, we fell into easy conversation 
        covering topics from sports to our beloved family dogs.Our early shared values, interest in athletics and love of outdoor 
        activities created the beginning of a genuine bond. After a year of post - college long distance with Ginna in Denver and 
        Tyler in San Francisco, Ginna decided to move to the Bay Area.Many years later, we have made lifelong California friends and our passion
        for adventure has led to ski trips, bike rides, hikes and camping trips.With a mutual desire to experience the beauty of earth together, we traveled
        for 5 months to explore the other side of the world.Here 's proof of us traveling through New Zealand in 2016!
        </Text>
      </View>
      </View>
    </ScrollView>
  );
}
