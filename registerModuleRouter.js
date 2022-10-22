import {registerModules} from "./register-modules";
import testModule from "@/views/Pages/Test/router.js";
import ExpertUserModule from "@/views/Pages/ExpertUser/router.js";

registerModules({
    test: testModule,
    ExpertUserModule,
})
