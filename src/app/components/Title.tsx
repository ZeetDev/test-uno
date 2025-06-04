function Title({ children, size, color }: { children: React.ReactNode; size?: string; color?: string }) {
    return <h1 className={`text-${size} bg-${color}-500 my_title`}>{children}</h1>;
}

export default Title;
