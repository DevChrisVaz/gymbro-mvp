import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../features/home/presentation/pages/Home";
import { Users } from "../features/users/presentation/pages/Users";
import { Login } from "@/features/auth/presentation/pages/Login";
import { Plans } from "@/features/plans/presentation/pages/Plans";
import { CreatePlan } from "@/features/plans/presentation/pages/CreatePlan";
import { Branches } from "@/features/branches/presentation/pages/Branches";
import { CreateBranch } from "@/features/branches/presentation/pages/CreateBranch";
import { Branch } from "@/features/branches/presentation/pages/Branch";
import { BranchLayout } from "@/features/branches/presentation/components/BranchLayout";
import { GYMLayout } from "@/features/gyms/presentation/components/GYMLayout";
import Equipment from "@/features/equipment/presentation/pages/Equipment/Equipment";
import { CreateEquipment } from "@/features/equipment/presentation/pages/CreateEquipment";
import CreateUserPage from "@/features/users/presentation/pages/CreateUserPage/CreateUserPage";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<GYMLayout />}>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Outlet />}>
                        <Route index element={<Users />} />
                        <Route path="create-user" element={<CreateUserPage />} />
                    </Route>
                    <Route path="plans" element={<Plans />} />
                    <Route path="plans/create-plan" element={<CreatePlan />} />
                    <Route path="branches" element={<Outlet />}>
                        <Route index element={<Branches />} />
                        <Route path="create-branch" element={<CreateBranch />} />
                    </Route>
                </Route>
                <Route path="branches/:id" element={<BranchLayout />}>
                    <Route index element={<Branch />} />
                    <Route path="plans" element={<Outlet />} >
                        <Route index element={<Plans />} />
                        <Route path="create-plan" element={<CreatePlan />} />
                    </Route>
                    <Route path="equipment" element={<Outlet />}>
                        <Route index element={<Equipment />} />
                        <Route path="add-equipment" element={<CreateEquipment />} />
                    </Route>
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="/error" element={<>Error</>} />
                <Route path="*" element={<>Not found</>} />
            </Routes>
        </BrowserRouter>
    )
}