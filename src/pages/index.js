import Image from "next/image";
import Link from "next/link";
import palettyImag from "../../public/paletty.png";

export default function Home() {
  return (
    <div>
      <p>previewモード確認</p>
      <p>ファイルを変更しメインブランチにpushしてみる</p>
      <Link href="/hello">Hello ページに遷移するリンク：next/link</Link>
      <br />
      <Link href="https://gsacademy.jp/">
        ジーズアカデミーの外部ページを開くリンク：next/link
      </Link>
      <br />
      <Link href="https://gsacademy.jp/" target="_blank">
        ジーズアカデミーの外部ページを開くリンク（別タブ）：next/link
      </Link>
      <br />
      <a href="">Hello ページに遷移するリンク：a タグ</a>
      <img src="/next.svg" alt="" />
      <Image src="/paletty.png" width={500} height={500} />
      <Image src={palettyImag} width={500} height={500} />
      <p>Hello World!</p>
    </div>
  );
}
