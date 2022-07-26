---
id: create-your-first-app
title: 4D で最初のモバイルアプリを作成しましょう！
---


4Dモバイルアプリケーションビルダーへようこそ。 このチュートリアルでは、4D を使った iOS および Android向けのモバイル開発をすぐに始められます。

:::note Reminder

始める前に、4Dモバイルプロジェクト開発のためのハードウェアとソフトウェアの要件

 を満たしていることを確認してください。  </p> 

:::

**シナリオ:** あなたは商業的なビジネスマネージャーで、連絡先情報を外出先でも確認したいと考えています。 これを実現するため、iOS や Android向けに連絡先アプリを作成しましょう。リスト画面で顧客名を検索して選択し、その詳細を確認できるようなイメージです。 アプリ名は "Contact" です。 





## ⒈ スタータープロジェクトをダウンロード

スタータープロジェクトをダウンロードし、解凍します。これにはデータベースファイルおよびプロジェクトのアイコンが含まれていますが、モバイルプロジェクトはまだ作成されていません。

<div className="center-button">
<a className="button button--primary" href="https://github.com/4d-go-mobile/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">スタータープロジェクト</a>
</div>

## ⒉ モバイルプロジェクトの作成

4Dアプリケーションを起動し、ダウンロードしたスタータープロジェクトを開きます。 ストラクチャーを表示して、テーブルを 1つだけ含んだ非常にシンプルなものであることを確認してください。

上部のメニューから **新規 ＞ モバイルプロジェクト** を選択します。 ようこそ画面が開いたら、モバイルプロジェクトに名前をつけましょう。 

![Project Name](img/new-project.png)

**続ける** をクリックします。

Androidプロジェクトの開発には、追加のコンポーネントが必要です。 **OK** をクリックすると、ダウンロードします:

![Android](img/install-android.png)






## ⒊ 一般ページ

この画面では、アプリの基本的な情報を入力します。

![Android](img/main-page.png)

* **ターゲットOS:** ビルドするモバイルプラットフォーム

:::note

Windows では、**Android** のみ利用可能です。 macOS では、**Android** と **iOS** の両方を選択できます。 

:::

* **組織:** 開発者 (あなた) の会社名とアプリの識別子を英数字で入力します。
* **プロダクト:** 
      * **名前:** アプリの名前です。 ここでは "Contact" と名付けましょう。
    * **ID** (バンドルID): 組織の識別子とプロダクト名を組み合わせる形で自動生成されます。
    * **バージョン** と **Copyright:** ここでは 1.0 にしておいてください。コピーライト情報は、編集しても構いません。
    * **アイコン:** スタータープロジェクトに収録されている画像ファイル (ContactIcon.png) をエリアにドラッグ＆ドロップします。
* **デベロッパー:** 
      - **名前:** コンピューターのユーザー名から自動入力されます。
    - **部署名:** Developer アカウントの Team ID です。 シミュレーター向けにビルドするだけであれば、空欄のままで構いません。

![一般](img/Contact-app-general-section-4D-for-iOS.png)



## ⒋ ストラクチャーページ

ここでは、モバイルデバイスに対して公開するデータのサブセット (具体的にはテーブルやフィールド) を定義します。 左のエリアでテーブルを、右のエリアでフィールドを選択します。 

今回は、**ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes**, **Photo** を選択します。

![ストラクチャー](img/Contact-app-structure-section-4D-for-iOS.png)



> データベースの各レコードを識別するため、プライマリーキー (ここでは IDフィールド) は除外しないようにしてください。




## ⒌ ラベル & アイコンページ

:::note

[**データ**](project-definition/data.md) と [**アクション**](project-definition/actions.md) ページでは、アプリのデータを設定したり、サーバー上のコードをトリガーしたりできます。 今回は、シンプルにするために、デフォルトの動作を使用します。 

:::

**ラベル & アイコン** ページを選択します。 ここでは、テーブル、フィールド、リレーションについて、アプリ内で使用されるラベルやアイコンを定義することができます。 

* 短いラベルと長いラベルは、利用可能なスペースに応じてアプリが自動的に使用します。
* テーブルアイコンを定義するには、テーブルの **アイコン** カラムをクリックします。 アイコンライブラリーが表示され、テーブルやフィールドを説明するアイコンを選択することができます。 また、アイコンを指定しない場合、デフォルトのアイコンが生成されます。
* フィールドのアイコンを少なくとも 1つを選択しましょう。残りのフィールドについては、エディターがデフォルトのアイコンを生成します。 また、すべてのフィールドを空にすることで、フィールドアイコンを表示させないこともできます。

![Icons & Labels](img/Contact-app-icons-labels-section-4D-for-iOS.png)




## ⒍ フォームページ

あともう少しです！　アプリの外観を決めるために、デザインを選びましょう。 リストフォームと詳細フォーム、それぞれのサンプルが用意されています。

* レコードをリスト形式で表示するために、listビューのテンプレートを選択します。 ここでは、**Profile** テンプレートを使用しましょう。

![List form template](img/ListformTemplate-form-section-4D-for-iOS.png)

テンプレートを選択すると、設定画面の下半分がテンプレートのリストからデザイン画面に切り替わります。

* 表示させたいフィールドをテンプレートにドラッグ＆ドロップします。Last Name を "検索に使用するフィールド" と "タイトル" にドロップしましょう。 "検索に使用するフィールド" および "セクションとして使用するフィールド" の使用は任意です。ここでは、セクションフィールドを未定義のままにします。

![List form content](img/ListformContent-form-section-4D-for-iOS.png)

あとは詳細フォームを決めるだけです。 

* アプリのコンセプトにふさわしいデザインを選ぶようにしてください。 ここでは、**Visual Contact** テンプレートを使用しましょう。

![Detail form template](img/DetailformTemplate-form-section-4D-for-iOS.png)

* 詳細フォームテンプレートの適切な場所にフィールドをドラッグ＆ドロップします: Photo は "ピクチャー"、First Name は "フィールド1"、Last Name は "フィールド2"。

![Detail form content](img/DetailformContent-form-section-4D-for-iOS.png)



## ⒎ アプリのビルド

おつかれさまでした！ デザインしたアプリをビルドして、シミュレーターで動かしてみましょう！

* 画面を **ビルド** タブに切り替えます。
* Select a device to use as a Simulator by clicking on the device button.
* Click  **Build and Run**.
* Wait a few seconds and... voila! Your mobile app is alive!

![ビルドして実行](img/Build-the-app-simulator.png)



## Where to go from here?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. Of course, many other options and features are available. Right now, you can click on **Final Project** below to download the final Contact app.

<div>
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">FINAL PROJECT</a>
</div>
