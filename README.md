# alert2

Simple alternative to alert.

    npm install https://github.com/bchoii/alert2

    import { alert2 } from "alert2";

    import "alert2/alert2.css";

    <button
      onClick={async () => {
        alert2("Message");
        await new Promise(r => setTimeout(r, 2000));
        hide();
      }}
    >
      Alert
    </button>
