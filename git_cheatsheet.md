## ------------------git clone コマンド集------------------
git clone ~ 既存のリモートリポジトリをローカル環境に複製するコマンド

git clone <リモート先のURL>


## ------------------git checkout コマンド集------------------
git checkout ~ 「ブランチの切り替え」と「ファイルの復元」の2つの機能を持つコマンド

ブランチの切り替えを行うコマンド。
git checkout <ブランチ名>
git switch <ブランチ名>

新しいブランチを作ってそのブランチへ切り替えを行うコマンド
git checkout -b <新しいブランチ名> [<新しいブランチの開始位置>]
git switch -c <新しいブランチ名> [<新しいブランチの開始位置>]


## ------------------git reset コマンド集------------------
git reset ~ 間違えて"git add"、"git commit"をしたとき、"git reset"を行うことでそれらの操作をなかったことにできる。

直前のコミットをなかったことにする
git reset --soft "HEAD^"

直前のコミットを取り消し
git reset --hard "HEAD^"

コミット後の変更を全部消したい
git reset --hard "HEAD"

addを取り消したい
git reset --mixed "HEAD"

git resetをなかったことにする
git reset --hard "ORIG_HEAD" 
