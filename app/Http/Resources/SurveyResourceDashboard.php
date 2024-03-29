<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class SurveyResourceDashboard extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $expire_date = new \DateTime($this->expire_date);
        return [
            'id' => $this->id,
            'image_url' => $this->image ? URL::to($this->image) : null,
            'title' => $this->title,
            'slug' => $this->slug,
            'status' => $this->status !== 'draft',
            'created_at' => (new \DateTime($this->created_at))->format('Y-m-d H:i:s') ,
            'expire_date' => $expire_date->format('Y-m-d'),
            'questions' => $this->questions()->count(),
            'answers' => $this->answers()->count()
        ];
    }
}
