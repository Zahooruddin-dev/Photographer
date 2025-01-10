import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

import {BrowserRouter as Router} from 'react-router-dom'
import {motion} from 'framer-motion'
import { useContext } from 'react';
import {CursorContext} from './context/CursorContext'

function App() {
  const {CursorVariants} = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* <motion.div
      variants={CursorVariants}
      animate={'default'}
      className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50"></motion.div> */}
    </>
  );
}

export default App;
