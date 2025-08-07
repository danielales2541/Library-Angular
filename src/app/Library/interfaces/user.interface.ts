export interface UserResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        User[];
    support:     Support;
}

export interface User {
    id:         number;
    email:      string;
    name:     string;
    status:    number;
}

export interface Support {
    url:  string;
    text: string;
}
