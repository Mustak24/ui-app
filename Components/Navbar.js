import Link from "next/link"
import { UnderlineBox, Logo } from "./Smallcss"
import { Input01 } from "./Input"


const navigation = {
    'user': [
        {title: 'Docs', href: '/docs'},
        {title: 'Components', href: '/docs'},
        {title: 'Themes', href: '/themes'},
        {title: 'Colors', href: '/colors'},
    ]
}

export default function Navabr({navigator='user'}){

    return <div className="sticky z-[100] top-0 w-full flex items-center justify-between px-5 h-16 font-sans text-sm shadow-[0_0_1px] backdrop-blur-md bg-transparent">
        <div className="flex items-center gap-5">
            <div className="font-bold text-mg flex items-center gap-2">
                <Logo />
                <div className="pb-[1px] max-md:hidden">App / Ui</div>
            </div>
            <div className="flex gap-2 font-semibold max-md:hidden">
                {navigation[navigator].map((element, index) => (<Link href={element.href} className="opacity-70 hover:opacity-100">
                    <UnderlineBox innerText={element.title} />
                </Link>))}
            </div>
        </div>
        <div className="flex">
            <Input01 />
        </div>
    </div>
}


