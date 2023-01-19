<?php

namespace App\Entity;

use App\Repository\RepLogRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\SerializedName;

#[ORM\Entity(repositoryClass: RepLogRepository::class)]
class RepLog
{
    const ITEM_LABEL_PREFIX = 'liftable_thing.';

    const WEIGHT_FAT_CAT = 18;

    private static $thingsYouCanLift = array(
        'cat' => '9',
        'fat_cat' => self::WEIGHT_FAT_CAT,
        'laptop' => '4.5',
        'coffee_cup' => '.5',
    );

    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    #[ORM\Column(name: 'id', type: 'integer')]
    private int $id;

    #[ORM\Column(name: 'reps', type: 'integer')]
    private int $reps;

    #[ORM\Column(name: 'item',type: 'string', length: 50)]
    private string $item;

    #[ORM\Column(name: 'totalWeightLifted', type: 'float')]
    private float $totalWeightLifted;

    private User $user;

    public function getId(): int
    {
        return $this->id;
    }

    public function getReps(): int
    {
        return $this->reps;
    }

    public function setReps(int $reps): self
    {
        $this->reps = $reps;

        $this->calculateTotalLifted();

        return $this;
    }

    public function getItem(): ?string
    {
        return $this->item;
    }

    public function getItemLabel()
    {
        return self::ITEM_LABEL_PREFIX.$this->getItem();
    }

    public function setItem(string $item): self
    {
        if (!isset(self::$thingsYouCanLift))
        {
            throw new \InvalidArgumentException(sprintf('You can\'t lift a "%s"!', $item));
        }

        $this->item = $item;
        $this->calculateTotalLifted();

        return $this;
    }

    public function getTotalWeightLifted(): ?float
    {
        return $this->totalWeightLifted;
    }

    public function setTotalWeightLifted(float $totalWeightLifted): self
    {
        $this->totalWeightLifted = $totalWeightLifted;

        return $this;
    }

    /**
     * Returns an array that an be used in a form drop down
     *
     * @return array
     */
    public static function getThingsYouCanLiftChoices(): array
    {
        $things = array_keys(self::$thingsYouCanLift);
        $choices = array();
        foreach ($things as $thingKey) {
            $choices[self::ITEM_LABEL_PREFIX.$thingKey] = $thingKey;
        }

        return $choices;
    }

    /**
     * Calculates the total weight lifted and sets it on the property
     */
    private function calculateTotalLifted(): void
    {
        if (!$this->getItem()) {
            return;
        }

        $weight = self::$thingsYouCanLift[$this->getItem()];
        $totalWeight = $weight * $this->getReps();

        $this->totalWeightLifted = $totalWeight;
    }

    /**
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param User $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }
}
