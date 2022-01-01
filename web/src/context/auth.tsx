import { createContext, useState, ReactNode, useEffect } from "react";
import { api } from "../services/api";

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthResponse = {
    token: string;
    user: {
        id: string,
        avatar_url: string,
        name: string,
        login: string
    }
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
}

type AuthProvider = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {

    const [user, setUser] = useState<User | null>(null)

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=6cb70e24dce8be8f3148`

    const signIn = async (githubCode: string) => {
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode,
        })

        const { token, user } = response.data;

        localStorage.setItem('@doWhile:token', token);
        setUser(user);
    }

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=');

        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=');

            window.history.pushState({}, '', urlWithoutCode);

            signIn(githubCode);
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('@doWhile:token');

        if (token) {
        
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            api.get<User>('profile').then(resp => {
                setUser(resp.data)
            })
        }

    }, [])

    return (
        <AuthContext.Provider value={{ signInUrl, user }}>
            {props.children}
        </AuthContext.Provider>
    );
}