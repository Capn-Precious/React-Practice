<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    protected $id;

    #[ORM\Column(name: 'first_name', length: 255)]
    protected $firstName;

    #[ORM\Column(name: 'last_name', type: 'string', length: 255)]
    protected $lastName;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @throws \Exception
     */
    public function getAvatar()
    {
        return 'http://thecatapi.com/api/images/get?format=src&type=gif&r='.random_int(100, 999);
    }

    /**
     * @return mixed
     */
    public function getFirstName(): string
    {
        return $this->firstName;
    }

    /**
     * @return mixed $firstName
     */
    public function setFirstName($firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLastName(): string
    {
        return $this->lastName;
    }

    /**
     * @return mixed $lastName
    */
    public function setLastName($lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }
}
