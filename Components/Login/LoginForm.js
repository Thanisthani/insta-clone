import React from 'react'
import { View, TextInput,Text, StyleSheet, Pressable } from 'react-native'
import * as Yup from 'yup';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';

const LoginSchema = Yup.object().shape(
    {
        email: Yup.string().email().required("An email is required"),
        password: Yup.string().required().min(6,'Your password has to have at least 6 characters')
    }
)

const LoginForm = () => {

    return (
        <View style={Styles.wrapper}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={values => { console.log(values) }}
                validationSchema={LoginSchema}
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
            <View style={Styles.wrapperforgotpass}>
            <Text style={Styles.forgotpass}>Forgot password ?</Text>
            </View>
            <Pressable style={Styles.button(isValid)} onPress={handleSubmit}>
                <Text style={Styles.buttonText}>Log in</Text>
            </Pressable>
            <View style={Styles.wrapperSignup}>
                <Text>Don't have an account ? </Text>
                <Text style={{color:"#6BB0F5"}}>Sign Up</Text>
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
export default LoginForm
