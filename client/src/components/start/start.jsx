import "./start.css";
import { useDispatch } from "react-redux";
import { shared } from "../../redux/action/userAC";

function Start() {
  const dispatch = useDispatch();

  // const handlerShared = () => {
  //   dispatch(shared());
  // };

  return (
    <div>
      <img className="imgLogo" src="img/logo.png" alt="logo" />
      <div className="startForm">
        <h1>Что бы получить цифровой аватар</h1>
        <div className="socialNetwork">
          <div>
            <h3>1.</h3>
          </div>
          <div className="iconsSocNet">
            <div className="pText">
              <p>Поделись с друзьями:</p>
            </div>
            <a href="https://vk.com">
              <img
                className="imgSocialNetwork"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/768px-VK_Compact_Logo.svg.png"
                alt="vk"
                target="_blank"
              />
            </a>
            <a href="https://facebook.com">
              <img
                className="imgSocialNetwork"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                alt="facebook"
                target="_blank"
              />
            </a>
            <a href="https://twitter.com">
              <img
                className="imgSocialNetwork"
                src="http://silc.se/wp-content/uploads/2016/05/twitter-logo.png"
                alt="twitter"
                target="_blank"
              />
            </a>
            <a href="https://ok.ru">
              <img
                className="imgSocialNetwork"
                src="https://cdn.worldvectorlogo.com/logos/ok-ru.svg"
                alt="ok"
                target="_blank"
              />
            </a>
          </div>
        </div>
        <div className="mailForm">
          <h3>2.</h3>
          <div>
            <div className="pText">
              <p>Оставь почту:</p>
            </div>
            <div className="mailBox">
              <form>
                <input type="mail" />
                <button type="submit">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
