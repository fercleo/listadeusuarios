import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { Input } from './components/ui/Input';
import { Button } from './components/ui/Button';
import axios from 'axios';
import './App.css';

const UserListApp = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, users]);

  const handleUserClick = (userId) => {
    setSelectedUserId(selectedUserId === userId ? null : userId);
  };

  return (
    <div className="container">
      <Input 
        placeholder="Pesquisar usuário..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="user-list">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <Card 
              className="cursor-pointer user-card-content" 
              onClick={() => handleUserClick(user.id)}
            >
              <CardContent>
                <h2 className="user-name">{user.name}</h2>
                <p><strong>Email: </strong>{user.email}</p>
                <p><strong>Telefone: </strong>{user.phone}</p>
              </CardContent>
            </Card>

            {selectedUserId === user.id && (
              <div className="user-details">
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Empresa:</strong> {user.company.name}</p>
                <p><strong>Endereço:</strong> {`${user.address.street}, ${user.address.city}`}</p>
                <Button onClick={() => setSelectedUserId(null)}>Fechar</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListApp;
""
