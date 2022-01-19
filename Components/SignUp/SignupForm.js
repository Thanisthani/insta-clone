import React from 'react'
import { View, TextInput,Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import * as Yup from 'yup';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import { auth,db } from '../../firbase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs , doc, setDoc } from 'firebase/firestore';


const SignupSchema = Yup.object().shape(
    {
        email: Yup.string().email().required("An email is required"),
        username: Yup.string().required().min(2,"Your username has to have at least 2 character"),
        password: Yup.string().required().min(6,'Your password has to have at least 6 characters')
    }
)




const SignupForm = ({ navigation }) => {
    
    const RegisterUser = (email, password,username) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((re) => {
                console.log("Sucessfully signed up");
                 setDoc(doc(db, "customers", re.user.uid), {
                    uid: re.user.uid,
                    username: username,
                    email:re.user.email
                  });
                // navigation.push("HomeScreen");
            })
            .catch((re) => {
                console.log(re);
            })
    }

    return (
        <View style={Styles.wrapper}>
            <Formik
                initialValues={{ email: "", username:"",password: "" }}
                onSubmit={values => { RegisterUser(values.email,values.password,values.username) }}
                validationSchema={SignupSchema}
                validateOnMount={true}>
                {({
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    values,
                    isValid
                    
                }) =>
                (
                <>
                        <View style={[Styles.inputfield,
                        {borderColor:values.email.length < 1 || EmailValidator.validate(values.email) ? "#ccc" : "red"}]}>
                <TextInput placeholder='Email'
                    placeholderTextColor='#444'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                                onChangeText={handleChange('email')}
                                onblur={handleChange('email')}
                                value={values.email}
                            />
                        </View>
                        
                        <View style={[Styles.inputfield,
                        {borderColor: 1>values.username.length || values.username.length >=2 ? "#ccc" : "red"}]}>
                <TextInput placeholder='Username'
                    placeholderTextColor='#444'
                    textContentType='username'
                    autoFocus={true}
                                onChangeText={handleChange('username')}
                                onblur={handleChange('username')}
                                value={values.username}
                            />
                        </View>
                        
                        <View style={[Styles.inputfield,
                        {borderColor:1>values.password.length || values.password.length >=6 ?"#ccc" : "red"}]}>
                            <TextInput placeholder='Password'
                                placeholderTextColor='#444'
                                textContentType='password'
                                secureTextEntry={true}
                                autoFocus={true}
                                onChangeText={handleChange('password')}
                                onblur={handleChange('password')}
                                value={values.password}
                            />
                           
            </View>
           
            <Pressable style={Styles.button(isValid)} onPress={handleSubmit}>
                <Text style={Styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View style={Styles.wrapperSignup}>
                            <Text>Already do you have an account ? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: "#6BB0F5" }}>Log In</Text>
                                </TouchableOpacity>
                        </View>
                        
                    </>
                    )}
                </Formik>
        </View>
    )
}

const Styles = StyleSheet.create({
    wrapper: {
        marginTop:30
    },
    inputfield: {
        backgroundColor: "#FAFAFA",
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        
    },
    wrapperforgotpass: {
        alignItems: "flex-end",
    },
    forgotpass: {
        color: "#6BB0F5",

    },
    button: isValid =>( {
        backgroundColor:isValid? "#0096F6" : "#9ACAF7",
        width: "100%",
        padding: 12,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
       marginTop:25
    }),
    buttonText: {
        color: "white",
        fontSize:18
    },
    wrapperSignup: {
        flexDirection: "row",
        marginTop:25,
    }
})
export default SignupForm
