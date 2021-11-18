import { Header } from './Header'
import { NavMenu } from './NavMenu'
import { Films } from './Films'
import { Games } from './Games'
import { Music } from './Music'
import { News } from './News'
import { Photo } from './Photo'
import { Profile } from './Profile'
import { AllUsersContainer } from './AllUsers/AllUsersContainer'
import { Route, BrowserRouter } from 'react-router-dom';
import { MessengerContainer } from './Messenger/MessengerContainer'
import { FriendsContainer } from './Friends/FriendsContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="claudIn__wrapper">
        <Header />
        <NavMenu />
        <div className="claudIn__content">
          <Route path='/profile'> <Profile/></Route>
          <Route path='/news'> <News /></Route>
          <Route path='/messenger'> <MessengerContainer/></Route>
          <Route path='/friends'> <FriendsContainer/></Route>
          <Route path='/photo'> <Photo /> </Route>
          <Route path='/music'> <Music /> </Route>
          <Route path='/films'> <Films /> </Route>
          <Route path='/games'> <Games /> </Route>
          <Route path='/allUsers'> <AllUsersContainer /> </Route>
        </div>
      </div>
    </BrowserRouter>

  );
}

export { App };
