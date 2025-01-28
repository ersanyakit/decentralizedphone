import React from 'react';
import { Card, Avatar, Input } from '@nextui-org/react';
import { Search } from 'lucide-react';

export const Contacts = () => {
  const contacts = [
    { name: 'Alice', number: '123-456-7890' },
    { name: 'Bob', number: '234-567-8901' },
    { name: 'Charlie', number: '345-678-9012' },
  ];

  return (
    <div className="h-full bg-gradient-to-b from-unicorn-blue/10 to-unicorn-pink/10 p-4">
      <Input
        placeholder="Search contacts"
        startContent={<Search className="text-default-400" />}
        className="mb-4"
      />
      <div className="space-y-2">
        {contacts.map((contact) => (
          <Card key={contact.name} className="p-4 bg-unicorn-white/50">
            <div className="flex items-center space-x-4">
              <Avatar
                name={contact.name}
                className="bg-unicorn-purple text-white"
              />
              <div>
                <div className="font-semibold">{contact.name}</div>
                <div className="text-sm text-gray-500">{contact.number}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};