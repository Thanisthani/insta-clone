import React from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
// import { Divider } from 'react-native-elements/dist/divider/Divider'


const Post = ({post}) => {
    return (
        <View style={{marginTop:10}}>
            {/* <Divider width={1} orientation='vertical' /> */}
            <Postheader post={post} />
            <Postimage post={post} />
            <Footericon />
            <Likes post={post} />
            <Caption post={post} />
            <CommentSection post={post} />
            <Comment post={post} />
        </View>
    )
}

const Postheader = ({ post }) =>
(
    <View style={Styles.head}>
        <View style={Styles.details}>
            <Image source={{ uri: post.profile }} style={Styles.img} />
            <Text style={Styles.name}>{post.username}</Text>
        </View>
        <Text style={Styles.more}>...</Text>
    </View>
);

const Postimage = ({ post }) =>
(
    <View>
        <Image style={Styles.postImage} source={{ uri: post.imageURL }} />
    </View>
);

const Footericon = ({ post }) =>
(
    <View style={Styles.iconContainer}>
        <View style={Styles.leftIcon}>
        <TouchableOpacity>
            <Image style={Styles.icon} source={require("../../assets/Heart.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={Styles.icon} source={require("../../assets/comment3.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={[Styles.icon,Styles.arrow]} source={require("../../assets/sendarrow.png")} />
            </TouchableOpacity>
            </View>
        <TouchableOpacity>
            <Image style={Styles.icon} source={require("../../assets/save.png")} />
        </TouchableOpacity>
        
    </View>
);

const Likes = ({post}) => (
    <Text style={Styles.like}>{post.likes} Likes</Text>
);

const Caption = ({ post }) => (
    <View style={Styles.captionContainer}>
        <Text style={Styles.captionName}>{post.username}</Text>
        <Text style={Styles.caption}>{post.caption}</Text>
  </View>  
);

const CommentSection = ({ post }) => (
    <View>
        
        {
            !!post.comments.length > 0 && (
                <Text style={{ color: 'grey', padding: 10 }}>
                    View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}  
                     {" "} {post.comments.length > 1 ? 'comments' : 'comment'}
                </Text>
            )
        }
        
    </View>
);

const Comment = ({ post }) => 
(
    <View>
        {post.comments.map((comment, index) => (
            <Text key={index} style={{color:"white"}}>
               <Text style={{fontWeight:"700" }}>{comment.user}</Text> {" "}
               {comment.comment}
            </Text>
            
        ))}
    </View>
    )
    


const Styles = StyleSheet.create(
    {

        head: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 20,
            alignItems:"center"
            
        },
        details: {
            flexDirection: "row",
            alignItems:"center"
        },
        name: {
            color: "white",
            paddingLeft:10
            
        },
        img: {
            width: 40,
            height: 40,
            borderRadius: 50,
            marginRight: 10,
            marginLeft:10,
            borderWidth: 1,
          borderColor:"#ff8501"
        },
        more: {
            fontWeight:"600",
            color: "white",
            paddingRight: 20,
            fontSize: 30,
            alignItems:"center"
        },
        postImage: {
            width: "100%",
            height: 300,
            resizeMode: "cover",
            marginVertical:15
        },
        iconContainer: {
            flexDirection: "row",
            marginHorizontal: 15,
          justifyContent:"space-between"
        },
        icon: {
            width: 30,
            height:30,
            resizeMode: "contain",
            marginRight:10
        },
        arrow: {
            transform:[{rotate:'350deg'}]
        },
        leftIcon: {
            flexDirection:"row"
        },
        like: {
            color: "white",
            margin:10,
            fontSize:17
            
        },
        captionContainer: {
            flexDirection: "row",
            
        },
        caption: {
            color: "white",
            fontSize:17
        },
        captionName: {
            color: "white",
            fontSize: 17,
            fontWeight: "700",
            paddingRight: 10,
            paddingLeft:10
        }
    }
);
    
export default Post
