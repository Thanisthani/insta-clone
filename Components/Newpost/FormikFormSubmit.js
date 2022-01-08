import React, { useState } from 'react';
import { View, Text, TextInput, Image , Button} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { Divider } from 'react-native-elements';

const placeHolder = "https://loadslammer.com/wp-content/uploads/2021/01/photo-placeholder-icon-17.jpg";

const uploadPostSchema = Yup.object().shape(
    {
        imageUrl: Yup.string().url().required('A URL is required'),
        caption: Yup.string().max(2200, 'Caption has reached the character')
    }
);

const FormikFormSubmit = ({navigation}) => {
    const [thumbnail, setThumbnail] = useState(placeHolder);
    return (
        <Formik
            initialValues={{ caption: "", imageUrl: "" }}
            onSubmit={values =>{ console.log(values),
            navigation.goBack()}}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid
            }) =>
            (
                <>
                    <View>
                        <Image source={{uri: thumbnail ? thumbnail : placeHolder}} style={{ width: 100, height: 100 }} />
                        <TextInput
                            style={{ color: "white", fontSize: 20 }}
                            placeholder='Write a caption ...'
                            placeholderTextColor='grey'
                            multiline={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={ values.caption}/>
                    </View>
                    {/* <Divider width={0.2} orientation='vertical' /> */}
                    <TextInput
                        style={{ color: "white", fontSize: 18 }}
                        onChange={e => setThumbnail(e.nativeEvent.text)}
                     placeholder='Enter image URL'
                     placeholderTextColor='grey'
                     onChangeText={handleChange('imageUrl')}
                     onBlur={handleBlur('imageUrl')}
                     value={ values.imageUrl}
                    />

                    {errors.imageUrl && (
                        <Text style={{color:"red", fontSize:10}}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title='share' disabled={!isValid}/>
                </>
            )}
            
       </Formik>
    )
}

export default FormikFormSubmit
