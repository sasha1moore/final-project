import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, Pressable } from 'react-native';
import Images from '../assets/Images';
import { useNavigation } from '@react-navigation/native';




const OPTIONS = [
   // item with index 1
  {
    id: 1,
    image: Images.Acrobats,
    title: 'Acrobats',
    description: "Lily and Meredith will deliver your gift with a perfomance that is sure to make your recipient's head spin!",
    screenName: 'AcrobatsScreen'
  },
  // item with index 2
  { 
    id: 2,
    image: Images.Balloons,
    title: 'Balloons',
    description: 'Add a bouquet of balloons to your gift delivery!',
    screenName: 'BalloonsScreen'
  },
  // item with index 3
  { 
    id: 3,
    image: Images.Confetti,
    title: 'Confetti',
    description: 'Confetti will rain down on your recipient as they recieve their gift!',
    screenName: 'ConfettiScreen'
  }
]

export default function OptionsScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => {navigation.navigate(item.screenName, {
        location: item
      })}}>
        <View key={item.id} style={styles.destinations}>
          <Image source={item.image} style={styles.destinationImages}></Image>
          <View style={styles.destinationText}>
            <View style={styles.titleDescription}>
              <Text style={styles.destinationTitle}>{item.title}</Text>
              <Text style={styles.destinationDescription}>{item.description}</Text>
            </View>
            <View style={styles.detailsText}>
              <Pressable onPress= {() => navigation.navigate('CheckoutScreen')}>
                <Text>Add to Cart</Text>
              </Pressable>
            </View>
            {/* <View style={styles.optionDetails}>
              <Text style={styles.detailsText}>Details</Text>
            </View> */}
          </View>
        </View>
      </Pressable>
    );
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbar}></View>
      <View style={styles.destinationsDropDown}></View>
      <View style={styles.horizontalScroll}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={OPTIONS}
          renderItem={renderItem}
        />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  searchbar: {
    width: '85%',
    flex: 1,
    margin: 15,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  destinationsDropDown: {
    width: '85%',
    flex: 1,
    marginTop: 15,
  },
  horizontalScroll: {
    width: '85%',
    flex: 8,
    margin: 20,
  },
  destinations: {
    height: '90%',
    width: 291,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  destinationImages: {
    height: 290,
    width: 290,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  destinationText: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '30%',
  },
  titleDescription: {
    margin: 15,
    marginTop: 20,
  },
  destinationTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  destinationDescription: {
    color: 'gray',
    fontSize: 12,
  },
  destinationExplore: {
    margin: 15,
  },
  detailsText: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 10,
  }
});
