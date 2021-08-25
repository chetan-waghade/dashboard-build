import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Campaigns from './pages/Campaigns';
import Empty from './pages/Empty';

function App() {
  return (
    <BrowserRouter basename="/root">
      <div className="App flex shadow-xl rounded-3xl">
        <Navigation />
        <section className="flex-auto">
          <Header />
          <main className="p-4 ">
            {/* Routes */}

            <Switch>
              <Route path="/ " component={Empty} exact />
              <Route path="/templates" component={Empty} />
              <Route path="/campaigns" component={Campaigns} />
              <Route path="/integrations" component={Empty} />
              <Route path="/manage_websites" component={Empty} />
              <Route path="/settings" component={Empty} />
            </Switch>
          </main>
        </section>
      </div>



    </BrowserRouter>
  );
}

export default App;
