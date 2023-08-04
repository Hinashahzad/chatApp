import Button from "../minorComponents/button";
import HeadingText from "../minorComponents/headingText";
import InputTextField from "../minorComponents/inputTextField";
import LabelText from "../minorComponents/labelText";
import Logo from "../minorComponents/logo";

const Login = () =>
{
    return ( <> 
          <div
            className="flex min-h-full 
                 flex-col
                 justify-center
                 px-6 py-12 lg:px-8 border border-blue-500">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Logo />
                <HeadingText text= "Sign in to your account "/>
        </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6">
        <div>
            <LabelText
                id="email"
                text="Email address"
              color="text-indigo-600 hover:text-indigo-500"/>
            <div className="mt-2">
                <InputTextField
                    id="email"
                    name="email"
                    type="email"
                  autocomplete="email"
                  width="w-full"
                  focus="focus:ring-2 focus:ring-inset 
                        focus:ring-indigo-600 ring-1
                        ring-inset ring-gray-300"/>
            </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
            <LabelText
            id="password"
            text="Password"/>
            <div className="text-sm">
                <LabelText text="Forgot password?" color="text-indigo-600 hover:text-indigo-500"/>
            </div>
        </div>
            <div className="mt-2">
            <InputTextField
                id="password"
                name="password"
                type="password"
                  autocomplete="current-password"
                  width="w-full"
                focus="focus:ring-2 focus:ring-inset focus:ring-indigo-600 ring-1 ring-inset ring-gray-300"/>
        </div>
      </div>
            <div>
              <Button type="submit"
              text="Sign in"/>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">Already a member?
          <LabelText text="Log in" color="text-indigo-600 hover:text-indigo-500" />
    </p>
  </div>
</div>
    </> );
};
export default Login;