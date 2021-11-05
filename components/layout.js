import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
const Layout = ({children}) =>{
    return (
        <div className="Layout">
          <Head>
            <title>TEDxJMI 2022</title>
            <meta name="description" content="TEDxJMI, x = independently organised TED event. Different Lenses. This January, at Jamia Millia Islamia." />
            <meta name="keywords" content="TEDx, JMI, Jamia Millia Islamia, New Delhi, event, talks"/>
          </Head>
          <div className='2xl:w-4/6 ml-auto mr-auto mb-12'>
            <Navbar />
            {children}
          </div>
          <Footer/>
        </div>
    );
}
export default Layout;