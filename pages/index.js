import Link from "next/link";
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={style.title}>Homepage</h1>

      <p className={style.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, tempore. Odit tempora, quia modi perspiciatis deleniti consequuntur, molestiae sed omnis aut deserunt tempore doloremque dolore quasi delectus soluta aliquam quos.</p>
      <p className={style.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, tempore. Odit tempora, quia modi perspiciatis deleniti consequuntur, molestiae sed omnis aut deserunt tempore doloremque dolore quasi delectus soluta aliquam quos.</p>
      <Link href={'/ninjas'}>
        <a className={style.btn}>See Ninja listing</a>
      </Link>
    </div>
  )
}
