import { User, Phone, Mail, Cake, ShieldUser } from "lucide-react";

const ButtonsBar = () => {
  return (
    <div className="p-6 w-full flex gap-10">
        <button className="transition-transform duration-200 hover:scale-105 hover:animate-bounce">
            <User/>
        </button>
        <button className="hover:animate-bounce">
            <Phone/>
        </button>
        <button className="hover:animate-spin">
            <Mail/>
        </button>
        <button className="hover:animate-ping">
            <Cake/>
        </button>
        <button className="hover:animate-spin">
            <ShieldUser/>
        </button>

    </div>
  );
};

export default ButtonsBar;