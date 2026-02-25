import Logo from "../../assets/images/Logo.png"

export default function Navbar() {
  return(
    <>
      <nav>
        <div>
          <img src={Logo} width="50px" alt="" />
          <p>Shout out!</p>
        </div>
      </nav>
    </>
  )
}