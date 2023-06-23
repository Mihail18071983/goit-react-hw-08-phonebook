import jwtDecode from 'jwt-decode';

export function isTokenExpired(token) {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
        return decoded.exp < currentTime;
    } catch (error) {
        // Token decoding failed
        return true;
    }
}