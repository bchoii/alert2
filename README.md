# alert2

Simple alternative to alert.

    npm install https://github.com/bchoii/alert2

    import * as alert2 from "alert2";

    import "alert2/alert2.css";

    <button
      onClick={async () => {
        console.log(alert2);
        alert2.show(`Message ${new Date()}`);
        await new Promise(r => setTimeout(r, 2000));
        alert2.hide();
      }}
    >
      Alert
    </button>
