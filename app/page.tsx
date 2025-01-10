import Link from "next/link";
import HeaderNavigation from "./header/page";

export default function Home() {
  return (
    <div className="container">
      <HeaderNavigation />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="">
          <div>
            <div>
              <h1>Hello buy or sell something !</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, cupiditate magnam? Nesciunt, odit. Sit voluptate rerum
                tenetur beatae ducimus cumque rem tempora quisquam voluptatem
                nemo aliquid, id iusto accusantium non sed totam enim fugit a,
                recusandae vel fugiat temporibus quasi culpa? Dolorem qui
                obcaecati minima est veritatis vel excepturi assumenda. Nemo
                aliquid, id iusto accusantium non sed totam enim fugit a,
                recusandae vel fugiat temporibus quasi culpa? Dolorem qui
                obcaecati minima est veritatis vel excepturi assumenda.
              </p>
              {/* Button */}
              <div>
                <Link href="products">Products</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
