import Document, { Html, Head, Main, NextScript } from 'next/document'
// import '../static/css/styles.css';

class MyDocument extends Document {

 
  render() {
    return (
      <Html lang = "en">
        <Head>
        <meta charSet="UTF-8" />

        <link rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

        {/* <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" 

        /> */}
        
        </Head>
       
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
