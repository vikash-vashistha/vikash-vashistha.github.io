import React from 'react';
import styled from 'styled-components';
import health from "../Resources/Images/Project/health.png";
import urban from "../Resources/Images/Project/urban.png";
import fitness from "../Resources/Images/Project/fitness.png";
import land from "../Resources/Images/Project/land.png";
import chat from "../Resources/Images/Project/chat.png";
import Weather from '../Resources/Images/Project/Weather.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';

const Projects = () => {
    const projects = [
      {
        id: 1,
        title: "Chat App",
        img: chat,
        desc: "A web chatting app built with Sockit.io and the Mearn stack. User is able to do single-user chat as well as group chat. If the chat is not open, the user will receive a notification. The user is able to see his own chat at any time because authentication is used.",
        worked:
          "This is a individual project which is only created by me in 4 days.",
        // keyPoint2:
        //   "Our food is always craveable. We are the original fried chicken experts, and everything we do celebrates our passion for serving finger lickin good food.",
        // keyPoint1:
        //   "KFC stores are located in more than 105 countries and were first opened in 1930.",
        githubLink: "https://github.com/vikash-vashistha/chat-app-frontend",
        deployedLink: "https://vikashchatapp.netlify.app/",
        tags: ["React", "Node", "Mongodb", "Express", "Chakra UI", "Socket.io"],
      },
      {
        id: 2,
        title: "Land App",
        img: land,
        desc: "I created the entire project by focusing more on the functionality than the UI. I have created the customer, seller, and admin sides of the website. On this website, customers can purchase plots, become partners in a land, request to become sellers, and chat with the landowners. seller can register new land. Administrators can control all fields.",
        worked:
          "This is a individual project which is only created by me in 7 days.",
        // keyPoint1:
        //   "Exercise with certified personal trainers whether you’re at home or on the road.",
        // keyPoint2:
        //   "Professionally designed programs take the guesswork out of exercising.",
        githubLink:
          "https://github.com/vikash-vashistha/vikash-vashistha-land-app",
        deployedLink: "https://vikash-land-app.netlify.app/",
        tags: ["React", "Node", "Mongodb", "Express", "Chakra UI"],
      },
      {
        id: 3,
        title: "MyFitnessPal Clone",
        img: fitness,
        desc: "MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. Where I developed Import/Export Modules, Product Page and Product Carousel Display.",
        worked:
          "A collaborative project, built in 4 days by a team of 5 developers.",
        // keyPoint2:
        //   "Find interactive analysis of cricket stats and records only on ESPNcricinfo.com.",
        // keyPoint1:
        //   "ESPNcricinfo is available to cricket fans through the online media and on a host of mobile platforms and handheld devices.",
        githubLink: "https://github.com/vikash-vashistha/cloneMyFitnessPal",
        deployedLink: "https://my-fitness-pal.vercel.app/",
        tags: ["React", "Node", "Mongodb", "Express", "Chakra UI"],
      },
      {
        id: 4,
        title: "Urban Outfitters Clone",
        img: urban,
        desc: "Urban Outfitters is a lifestyle retailer dedicated to inspiring customers through a unique combination of product, creativity and cultural understanding. Where I developed navbar, lending, add-to-cart pages and sign in and registration for user.",
        worked:
          "A collaborative project, built in 4 days by a team of 5 developers.",
        githubLink: "https://github.com/vikash-vashistha/CloneUrbanOutfitters",
        deployedLink: "https://clone-urban-outfitters.vercel.app/",
        tags: ["Node", "MongoDB", "Java Script", "CSS", "HTML"],
      },
      {
        id: 5,
        title: "Health Mug Clone",
        img: health,
        desc: "A vision that quickly broadened up and helped it in becoming more than just a mere online portal, to an online marketplace for shopping Ayurvedic to Homeopathy to Unani medicines to Health Supplements and much more. Since its inception, Healthmug has grown into a world-class e-platform for everything related to health & fitness. What draws a major distinction between us and our contemporaries is the way we promote a harmonious relationship between the sellers and the buyers for the greater good.",
        worked:
          "A collaborative project, built in 4 days by a team of 5 developers.",
        githubLink: "https://github.com/vikash-vashistha/CloneHealthMug",
        deployedLink: "https://healthmugclone.netlify.app/",
        tags: ["JavaScript", "HTML", "CSS"],
      },
      //   {
      //     id: 6,
      //     title: "Weather App",
      //     img: Weather,
      //     desc: "Weather App has local and international weather forecasts from the most accurate weather forecasting technology featuring up to the weekly weather reports.",
      //     worked:
      //       "This is a individual project which is only created by me in 1 day.",
      //     githubLink: "https://github.com/MoHitksS/weather-app",
      //     deployedLink: "https://weather-app-ind.netlify.app/",
      //     tags: ["HTML", "CSS", "Javascript", "React", "Chakra UI"],
      //   },
    ];

    return (
        <Container id='projects' >
            <h1>Projects</h1>
            <div className='projectsContainer'>
                {projects.map((ele, index) => (
                    <div key={index} className="box">
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='100%' />
                        </div>
                        <div className='ContentBox'>
                            <h1>{ele.title}</h1>
                            <p>{ele.desc}</p>
                            <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
                            <div className='tagsBox'>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                {ele.githubLink && <a href={ele.githubLink} target='_blank' rel='noreferrer'><button><GitHubIcon />Github</button></a>}
                                <a href={ele.deployedLink} target='_blank' rel='noreferrer'><button><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}


const Container = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    h1{
        color:#01a479;
        text-transform:uppercase;
    }

    .projectsContainer{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .box{
        position:relative;
        width:100%;
        height:450px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
        border: 10px solid #e9e9e9;
        border-radius: 20px;
        overflow:hidden;
    }

    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
    }

    .imgBox>img:hover{
        position:absolute;
        width:80%;
        transform: scale(1.3);
        transform-origin: 0% 0%;
    }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:#343a40;
    }

    .ContentBox>p{
        width:90%;
        font-size:large;
        margin-top:0px;
    }

    .tagsBox{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .tagsBox>span{
        color:white;
        background-color:#01a479;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:#44a4be;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects