const TaskInfoCard = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.containerInput}>
      <Image source={props.src} style={styles.iconInput} />
      <TextInput
        placeholder={props.placeholder}
        style={styles.inputInput}
        onChangeText={item => dispatch(setInput(item))}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
    borderRadius: 10,
    padding: 5,
    width: '97%',
    margin: 4,
    elevation: 0.2,
  },
  iconInput: {
    width: 20,
    height: 20,
  },
  inputInput: {
    marginLeft: 10,
    width: '100%',
  },
});
