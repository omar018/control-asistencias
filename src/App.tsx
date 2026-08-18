
import Footer from './ui/components/template/Footer'
import Header from './ui/components/template/Header'
import { ListUser } from './ui/pages/User/ListUser'

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <ListUser />
            </main>
            <Footer />
        </div>
        </>
    )
}

export default App