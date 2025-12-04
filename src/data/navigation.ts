export interface NavItem {
    href: string;
    label: string;
    children?: NavItem[];
}

export const navItems: NavItem[] = [
    // {
    //     href: "/",
    //     label: "Inicio",
    // },
    {
        href: "/nosotros",
        label: "Nosotros",
    },
    {
        href: "/operaciones",
        label: "Operaciones",
        children: [
            {
                href: "/operaciones/obras-civiles",
                label: "Obras Civiles",
            },
            {
                href: "/operaciones/infraestructura",
                label: "Infraestructura",
            },
            {
                href: "/operaciones/electromecanica",
                label: "Electromecánica",
            },
            {
                href: "/operaciones/paisajismo",
                label: "Paisajismo",
            },
            {
                href: "/operaciones/mineria",
                label: "Minería",
            },
            {
                href: "/operaciones/consultoria",
                label: "Consultoría",
            },
        ],
    },
    {
        href: "/proyectos",
        label: "Proyectos",
    },
    {
        href: "/sostenibilidad",
        label: "Sostenibilidad",
    },
    {
        href: "/documentacion",
        label: "Documentación",
    },
    {
        href: "/certificacion",
        label: "Certificación",
    },
    {
        href: "/contacto",
        label: "Contacto",
    },
]

