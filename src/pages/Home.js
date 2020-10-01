import React , {useState,useEffect} from 'react'
import "./modal.scss";
import { Link } from 'react-router-dom';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import Amplify from 'aws-amplify';
Amplify.configure(awsconfig);

export const Home = () => {
    const [show, setShow] = useState(false);
    const [authState, setAuthState] = useState();
    const [user, setUser] = useState();
    const [showsign, setShowsign] = useState(false);
    
    
    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData);
            
        });
    }, []);
    const Modal = () =>{
        return (
        <div className="modal" >  
        <div className="content">Каждый род уникален, если бы была возможность нарисовать рисунок рода, он был бы неповторим. Представьте вазу на которой каждый член семьи из поколения в поколение делает свою пометку. Такая ваза несомненно станет ценным достоянием. 
        Почему-то мы мало храним информацию о своих предках и банально мало знаем, а представьте как бы нам могла помочь осведомлённость в этом вопросе. Знать родство,  наследственность, национальность. А как бы хотелось услышать голос своего прапра дедушки или наилучшие пожелания пра пра пра бабушки. Посмотреть чем они жили, как чувствовали,  как любили. Наш род это огромный ресурс поддержки и знаний, которые нужно не терять, а хранить и накапливать. Передавая грядущим поколениям.
        Мы создали этот сайт, потому что сейчас это возможно! И нельзя упускать такую возможность!
        Записывайте то что с вами происходит, оставляйте сообщения своим пра пра правнукам!! Делитесь важной информацией, записывайте секреты, которые могут открываться тогда когда вы пожелаете возможно даже через 100 лет.</div>
        <div className="actions">
        <button onClick={() => setShow(false)} className="toggle-button">OK</button>
            </div>
        </div>
        )
    }
    return (
        <>
        {show ?  <Modal className="modalcom"/> : null}
        <div id="home">

            <div className="inter">
            <p>
            Здесь вы сможете накапливать свои семейные ценности,  пронося мудрость поколений сквозь время и расстояние
            </p>
            <div className="container">
            <button onClick={() => setShow(true)} className="btn rounded" >
                <span className="text-green">узнать больше</span>
            </button>
            </div>
            <Link to="/sign/:user">
            <button onClick={() => setShowsign(true)} className="btn rounded" >
                <span className="text-green">Создать аккаунт</span>
            </button>
            </Link>
            <br/>
            <Link to="/sign/:user">
            <button onClick={() => setShowsign(true)} className="btn orounded" >
            <span className="text-green"> Логин &nbsp; &nbsp;</span><span className="text-orange"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
            </button>
            </Link>
            </div>
            
        
        </div>
        </>
    )
}
export default Home;