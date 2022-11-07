import {Link} from 'react-router-dom'

const Public = () => {

  const content = (  
  <section className="public">
        <header>
            <h1>Welcome to repair store !</h1>
        </header>
        <main>
            <p>Located in Beautiful Downtown Foo city,Repair Store Provider</p>
            <p>
                &nbsp;
            </p>
            <address>
                Repair store <br/>
                5555 Foo Drive <br/>
                Foo city , CA 12345 <br />
                <a href="tel:+15555555555">(555) 555-55555</a>
            </address>
        </main>
        <footer>
            <Link to="/login">Employee Login</Link>
        </footer>
    </section>
    )
    return content
}
export default Public