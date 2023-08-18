import Home from "@pages/Home"
import Atuacao from "@pages/Atuacao"
import Servicos from "@pages/Servicos"
import Sobre from "@pages/Sobre"
import Layout from "@components/Layout"

export default function Index() {
  return (
    <Layout>
      <Home/>
      <Atuacao/>
      <Servicos/>
      <Sobre/>
    </Layout>
  )
}
