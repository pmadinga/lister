import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, tempore. Odit tempora, quia modi perspiciatis deleniti consequuntur, molestiae sed omnis aut deserunt tempore doloremque dolore quasi delectus soluta aliquam quos.</p>
      <Link href={'/ninjas'}><a>See Ninja listing</a></Link>
    </div>
  )
}
